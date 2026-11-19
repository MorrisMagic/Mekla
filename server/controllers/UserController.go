package controllers

import (
	"net/http"

	"github.com/MorrisMagic/Mekla.git/initilaziers"
	"github.com/MorrisMagic/Mekla.git/models"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type NewUser struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Phone     string `json:"phone"`
	Password  string `json:"password"`
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
