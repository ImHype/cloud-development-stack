package main

import (
	"github.com/gin-gonic/gin"
	"github.com/imhype/k8stack-api/controllers"
)

func main() {
	r := gin.Default()

	controllers.Route(r)

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
