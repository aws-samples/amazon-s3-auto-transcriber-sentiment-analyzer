/*
  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify,
  merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict'

process.env.AWS_REGION = "<<enter region>>"
process.env.OutputBucket = "<<enter S3 bucket name>>"
process.env.ddbTable = '<<enter your table name>>'

const { handler } = require('./app')

// Mock event
const event = {
  "Records": [
    {
      "s3": {
        "bucket": {
          "name": "<<bucketname>>"
        },
        "object": {
          "key": "<<object_key>>"
        }
      }
    }
  ]
}

const main = async () => {
  console.log('Starting test')
  await handler(event)
  console.log('Ending test')
}

main()

