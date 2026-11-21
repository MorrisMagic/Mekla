package models

import "gorm.io/gorm"

type Menu struct {
	gorm.Model
	Title        string `gorm:"unique"`
	Resturant    string
	Type         string
	Rate         int
	deliveryType string
	Price        int
}
