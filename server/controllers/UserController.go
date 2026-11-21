package controllers

import (
	"net/http"
	"os"
	"time"

	"github.com/MorrisMagic/Mekla.git/initilaziers"
	"github.com/MorrisMagic/Mekla.git/models"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type NewUser struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Phone     string `json:"phone"`
	Password  string `json:"password"`
}
type NewLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func CreateUser(c *gin.Context) {
	var NewUser NewUser

	err := c.ShouldBindJSON(&NewUser)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid body",
		})
		return
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(NewUser.Password), 10)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Failed to hash the password",
		})
		return
	}
	user := models.User{First_name: NewUser.FirstName, Last_name: NewUser.LastName, Email: NewUser.Email, Phone: NewUser.Phone, Password_hashed: string(hash)}
	result := initilaziers.DB.Create(&user)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Failed to create new user",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{})

}

func LoginUser(c *gin.Context) {
	var NewLogin NewLogin
	err := c.ShouldBindJSON(&NewLogin)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid body",
		})
		return
	}
	var user models.User
	initilaziers.DB.First(&user, "email = ?", NewLogin.Email)
	if user.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{
			"message": "user not found",
		})
		return

	}
	err = bcrypt.CompareHashAndPassword([]byte(user.Password_hashed), []byte(NewLogin.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "invalid body",
		})
		return
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})
	tokenString, err := token.SignedString([]byte(os.Getenv("JWT")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "failed to create token",
		})
		return
	}
	c.SetSameSite(http.SameSiteDefaultMode)
	c.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{})
}
func User(c *gin.Context) {
	cookie, err := c.Cookie("Authorization")
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "You are not Unauthorized"})
		return
	}
	token, err := jwt.Parse(cookie, func(t *jwt.Token) (any, error) {
		return []byte(os.Getenv("JWT")), nil
	})
	if err != nil || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}
	claims := token.Claims.(jwt.MapClaims)
	var model models.User
	initilaziers.DB.Find(&model, "id=?", claims["sub"])
	c.JSON(200, gin.H{
		"user": model,
	})

}
func Logout(c *gin.Context) {
	c.SetCookie("Authorization", "", -1, "/", "localhost", false, true)
	c.JSON(201, gin.H{
		"message": "logout",
	})

}
