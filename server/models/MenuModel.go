package models

import "gorm.io/gorm"

type Menu struct {
	gorm.Model
	Title        string `gorm:"unique"`
	Resturant    string
	Type         string
	Rate         int
	DeliveryType string
	Price        int
	Photo        string
}
