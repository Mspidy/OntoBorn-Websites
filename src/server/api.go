package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

type AppForm struct {
	Name        string `json:"name" form:"name"`
	Email       string `json:"email" form:"email"`
	PhoneNumber string `json:"phone_number" form:"phone_number"`
	Text        string `json:"text" form:"text"`
}

func getCorsConfig() gin.HandlerFunc {
	var origins = []string{"*"}

	return cors.New(cors.Config{

		AllowOrigins: origins,
		AllowMethods: []string{"GET", "POST", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Authorization", "Accept", "Accept-Encoding",
			"Accept-Language", "Connection", "Content-Length",
			"Content-Type", "Host", "Origin", "Referer", "User-Agent", "transformRequest"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	})
}

var forms = []AppForm{
	{
		Name:        "",
		Email:       "",
		PhoneNumber: "",
		Text:        "",
	},
}

func main() {
	router := gin.Default()
	router.Use(getCorsConfig())
	db, err := sql.Open("mysql", "root:Prabhat@2022@tcp(127.0.0.1:3306)/form?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println("Connection Successfully!!!")

	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Fatalln(err)
	}

	// router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "It works")
	})

	router.POST("/person", func(c *gin.Context) {
		var user AppForm
		c.Bind(&user)
		log.Println(user)
		if user.Name != "" && user.Email != "" && user.PhoneNumber != "" && user.Text != "" {
			if insert, _ := db.Exec(`INSERT INTO fullstack(Name, Email, PhoneNumber, Text) VALUES(?, ?, ?, ?)`, user.Name, user.Email, user.PhoneNumber, user.Text); insert != nil {
				_, err := insert.LastInsertId()
				if err == nil {
					content := &AppForm{
						Name:        user.Name,
						Email:       user.Email,
						PhoneNumber: user.PhoneNumber,
						Text:        user.Text,
					}
					c.JSON(http.StatusOK, gin.H{
						"status": "ok",
						"data":   content,
					})
				}
			}
		}

	})
	router.GET("/persons", func(c *gin.Context) {
		rows, err := db.Query("SELECT Name,Email,PhoneNumber,Text FROM fullstack")
		defer rows.Close()

		if err != nil {
			log.Fatalln(err)
		}

		appforms := make([]AppForm, 0)

		for rows.Next() {
			var appform AppForm
			rows.Scan(&appform.Name, &appform.Email, &appform.PhoneNumber, &appform.Text)
			appforms = append(appforms, appform)
		}
		if err = rows.Err(); err != nil {
			log.Fatalln(err)
		}

		c.JSON(http.StatusOK, gin.H{
			"appforms": appforms,
		})
	})
	router.Run(":8001")
}
