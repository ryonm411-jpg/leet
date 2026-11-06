"""Order prices. All money is in whole cents, so there are no float rounding surprises."""

BULK_QTY = 10           # a line with this many units or more gets the bulk discount
BULK_PERCENT_OFF = 10   # discount on that line, in percent


def line_total(price_cents, qty):
    """Price of one order line, before any discount."""
    return price_cents * qty


def order_total(order, prices):
    """Total price of an order in cents.

    prices maps each SKU to its unit price in cents.
    """
    total = 0
    for sku, qty in order:
        total += line_total(prices[sku], qty)
    return total
