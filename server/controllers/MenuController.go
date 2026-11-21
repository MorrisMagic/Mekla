package controllers

import (
	"net/http"

	"github.com/MorrisMagic/Mekla.git/initilaziers"
	"github.com/MorrisMagic/Mekla.git/models"
	"github.com/gin-gonic/gin"
)

func AllMenu(c *gin.Context) {
	var menu []models.Menu

	initilaziers.DB.Find(&menu)

	c.JSON(http.StatusOK, menu)

}
