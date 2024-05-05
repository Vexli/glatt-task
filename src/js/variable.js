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
        "id": "38361189",
        "url": "https://api.clickup.com/api/v2",
        "end": {
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
            "team": ["teams"],
            "space": ["spaces"],
            "task": ["tasks"]
        },
        "param": {
            "space": {"archived": "false"},
            "task": {"assignees[]": "38361189", "subtasks": true}
        },
        "key": {
            "id": ["id"]
        }
    }
}