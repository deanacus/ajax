# Ajax

A simple little wrapper around XMLHttpRequest to promisify getting and sending
data.

Build solely as an excuse to get started learning how to create and resolve promises

## Install

Use npm `npm install --save @deanacus/ajax`

## Usage

Import the library into your file:

`import '@deanacus/ajax'`

Then, depending on if you want to get data, or send data, use the appropriate interface.

### Get

To request data, call `ajax.get()`

Paramaters:

| Option   | Value type | Description                                                        |
|----------|------------|--------------------------------------------------------------------|
| endpoint | string     | The URL to which you would like to make the request                |
| headers  | object     | An object containing the key/value pairs to set as request headers |


### Send

To send data, call `ajax.send()`

Paramaters:

| Option   | Value type | Description                                                                |
|----------|------------|----------------------------------------------------------------------------|
| endpoint | string     | The URL to which you would like to send the request                        |
| payload  | any        | The data you wish to send to the enpoint. This is not processed in any way |
| headers  | object     | An object container the key/value pairs to set as request headers          |
