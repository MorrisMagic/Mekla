package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	First_name      string
	Last_name       string
	Email           string `gorm:"unique"`
	Phone           string
	Password_hashed string `json:"-"`
}
