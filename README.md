# relationalai-sdk

RelationalAI SDK for JavaScript

## Installation

```
npm install relationalai-sdk
```

## Usage

```
import { Connection } from 'relationalai-sdk';

const connection = new Connection();
let res = await connection.connectToDatabase('dbname', 'compute');
```
