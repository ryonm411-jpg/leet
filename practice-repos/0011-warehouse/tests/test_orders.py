import unittest

from warehouse.inventory import Inventory
from warehouse.orders import fulfil


def stocked(**levels):
    inv = Inventory()
    for sku, qty in levels.items():
        inv.add_stock(sku, qty)
    return inv


class FulfilTests(unittest.TestCase):
    def test_order_with_spare_stock_ships(self):
        inv = stocked(BOX=10, TAPE=5)
        self.assertTrue(fulfil([("BOX", 2), ("TAPE", 1)], inv))
        self.assertEqual(inv.stock_of("BOX"), 8)
        self.assertEqual(inv.stock_of("TAPE"), 4)

    def test_order_for_exactly_the_last_units_ships(self):
        inv = stocked(BOX=3)
        self.assertTrue(fulfil([("BOX", 3)], inv))
        self.assertEqual(inv.stock_of("BOX"), 0)

    def test_short_order_ships_nothing(self):
        inv = stocked(BOX=10, TAPE=1)
        self.assertFalse(fulfil([("BOX", 2), ("TAPE", 4)], inv))
        self.assertEqual(inv.stock_of("BOX"), 10)
        self.assertEqual(inv.stock_of("TAPE"), 1)

    def test_unknown_sku_ships_nothing(self):
        inv = stocked(BOX=10)
        self.assertFalse(fulfil([("GLUE", 1)], inv))


if __name__ == "__main__":
    unittest.main()
