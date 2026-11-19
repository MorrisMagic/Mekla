package initilaziers

import (
	"fmt"

	"github.com/MorrisMagic/Mekla.git/models"
)

func SyncModel() {
	err := DB.AutoMigrate(&models.User{})
	if err != nil {
		panic(fmt.Sprintf("Error migrating database: %v", err))
	}

	fmt.Println("Database migrated successfully!")

}
