# Your task

You've joined the team that owns this code. Two tickets are assigned to you.

## Ticket 1: bug

> A customer ordered the last 3 boxes we had. The order was rejected, even though 3 were in stock.

Find the cause and fix it. Change as little as possible. `tests/test_orders.py` already has a test for this case.

## Ticket 2: feature

> Bulk discount: any order line with 10 or more units of one SKU gets 10% off that line. Round each discounted line down to whole cents.

Build it in `warehouse/pricing.py`. The constants you need are already at the top of that file. The tests in `BulkDiscountTests` describe exactly what's expected.

## Done means

- Every test passes when you run `py -m unittest -v`.
- You didn't edit any test to make it pass.
