/* IMPORT */
import {key} from './key.js'

/* DEFINITION */
export let v = {
    "arr": {
        "empty": []
    },
    "api": {
        "get": "GET",
        "acceptAll": "*/*",
        "agent": "Thunder Client (https://www.thunderclient.com)",
    },
    "click": {
        "url": {
            "api": "https://api.clickup.com/api/v2",
            "task": "https://app.clickup.com/t/"
        },
        "end": {
            "user": "/user",
            "team": "/team",
            "space": "/space",
            "folder": "/folder",
            "task": "/task",
        },
        "header": {
            "Accept": {"$ref": "#/api/acceptAll"},
            "User-Agent": {"$ref": "#/api/agent"},
            "Authorization": key.clickup
        },
        "arr": {
            "user": ["user"],
            "team": ["teams"],
            "space": ["spaces"],
            "task": ["tasks"]
        },
        "param": {
            "space": {"archived": "false"},
        },
        "key": {
            "id": ["id"]
        }
    },
    "prompt": {
        "keyClickup": "Please enter your Clickup API Key below"
    }
}