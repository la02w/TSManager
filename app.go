package main

import (
	"TSManager/utils"
	"context"
	"encoding/json"

	ts3 "github.com/la02w/ts3-webquery/v2"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetServerList(filepath string) []utils.Server {
	return utils.GetServerList(filepath)
}

func (a *App) GetServerData(url string, apikey string, commond string, optione string) *ts3.Response {
	c := ts3.Login(url, apikey)
	var result map[string]string
	json.Unmarshal([]byte(optione), &result)
	resp, _ := c.Exec(commond).SetData(result).GetData()
	return resp
}
