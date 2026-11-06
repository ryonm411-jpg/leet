"""Stock levels for each product, keyed by SKU (stock keeping unit)."""


class Inventory:
    def __init__(self):
        self._stock = {}

    def add_stock(self, sku, qty):
        """Receive qty units of sku into the warehouse."""
        self._stock[sku] = self._stock.get(sku, 0) + qty

    def remove_stock(self, sku, qty):
        """Take qty units of sku out. Raises ValueError if there aren't enough."""
        if not self.has(sku, qty):
            raise ValueError(f"not enough {sku}")
        self._stock[sku] -= qty

    def stock_of(self, sku):
        """How many units of sku are in stock. 0 if the SKU is unknown."""
        return self._stock.get(sku, 0)

    def has(self, sku, qty):
        """True if at least qty units of sku are in stock."""
        return self.stock_of(sku) > qty
