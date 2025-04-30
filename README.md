# date-transformer

Transform dates into any string format like YYYY-MM-DD, hh:mm A, etc.

## Installation

```bash
npm install date-transformer
```

## Usage

```typescript
import { transformDate } from 'date-transformer';

const date = new Date();
const formatted = transformDate(date, 'YYYY-MM-DD hh:mm A');
console.log(formatted); // Example: 2025-04-30 03:30 PM
```

## Format Patterns

- `YYYY`: Full year (e.g., 2025)
- `YY`: Short year (e.g., 25)
- `MM`: Month (01-12)
- `DD`: Day of month (01-31)
- `hh`: Hours in 12-hour format (01-12)
- `HH`: Hours in 24-hour format (00-23)
- `mm`: Minutes (00-59)
- `ss`: Seconds (00-59)
- `A`: AM/PM marker

## License

MIT