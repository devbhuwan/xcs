#!/usr/bin/env bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("Run Form.io API Platform" "Prune System" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Run Form.io API Platform")
            echo "you chose 'Run Form.io API Platform'"
            docker-compose up
            ;;
        "Prune System")
            echo "you chose 'Prune System'"
            docker system prune
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done
