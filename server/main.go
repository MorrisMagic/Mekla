package main

import (
	"os"

	"github.com/MorrisMagic/Mekla.git/controllers"
	"github.com/MorrisMagic/Mekla.git/initilaziers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initilaziers.LoadEnv()
	initilaziers.ConnectDB()
	initilaziers.SyncModel()
}

func main() {
	app := gin.Default()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))
	app.POST("/signup", controllers.CreateUser)
	app.POST("/login", controllers.LoginUser)
	app.POST("/user", controllers.User)
	app.GET("/logout", controllers.Logout)

	app.GET("/allmenu", controllers.AllMenu)

	app.GET("/health", func(ctx *gin.Context) {
		ctx.String(200, "health 100%")
	})

	app.Run(os.Getenv("PORT"))
}
