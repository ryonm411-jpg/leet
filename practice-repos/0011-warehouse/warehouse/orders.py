"""Fulfilling customer orders from the inventory.

An order is a list of (sku, qty) lines, for example [("BOX", 2), ("TAPE", 1)].
"""


def can_fulfil(order, inventory):
    """True if every line of the order is in stock."""
    return all(inventory.has(sku, qty) for sku, qty in order)


def fulfil(order, inventory):
    """Ship the whole order, or nothing.

    Returns True and removes the stock if every line is available.
    Returns False and leaves the stock unchanged otherwise.
    """
    if not can_fulfil(order, inventory):
        return False
    for sku, qty in order:
        inventory.remove_stock(sku, qty)
    return True
