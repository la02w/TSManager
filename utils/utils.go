package utils

import (
	"encoding/json"
	"os"
)

type Server struct {
	Name string `json:"name"`
	URL  string `json:"url"`
	API  string `json:"api"`
}

func GetServerList(filePath string) []Server {
	fileContent, err := os.ReadFile(filePath)
	if err != nil {
		return nil
	}

	var servers []Server
	if err := json.Unmarshal(fileContent, &servers); err != nil {
		return nil
	}

	return servers
}
