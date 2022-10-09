package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type App struct {
	Name string `json:"name"`
	Desc string `json:"desc"`
}

func GetApps(c *gin.Context) {
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
}
