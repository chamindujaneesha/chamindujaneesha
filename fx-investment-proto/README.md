# Enomy-Finances FX & Investment Prototype

## Quick Start

```bash
docker-compose up --build
```

## API
- `POST /api/auth/login` → `{ token }`
- `GET /api/fx/convert?from=&to=&amount=`
- `POST /api/invest/forecast` → `{ min, likely, max }`
- `GET /api/audit` *(adviser only)*

## Tests

Backend:
```bash
dotnet test
```
Frontend:
```bash
npm ci
npm test
```
