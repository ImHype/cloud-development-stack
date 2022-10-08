package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type App struct {
	Name string `json:"name"`
	Desc string `json:"desc"`
}

func main() {
	r := gin.Default()
	r.GET("/api/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.GET("/api/apps", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": []App{
				{
					Name: "App1",
					Desc: "A Stack app1",
				},
				{
					Name: "App2",
					Desc: "A Stack app2",
				},
			},
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
