#!/bin/bash

docker compose down && docker build -t express-app:latest . && docker compose up -d