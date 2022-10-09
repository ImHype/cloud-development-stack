package controllers

import (
	"github.com/gin-gonic/gin"
)

func Route(r *gin.Engine) {
	r.GET("/api/ping", Ping)
	r.GET("/api/apps", GetApps)
}
