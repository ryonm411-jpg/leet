import unittest

from warehouse.inventory import Inventory


class InventoryTests(unittest.TestCase):
    def test_new_sku_starts_at_zero(self):
        self.assertEqual(Inventory().stock_of("BOX"), 0)

    def test_add_stock_accumulates(self):
        inv = Inventory()
        inv.add_stock("BOX", 3)
        inv.add_stock("BOX", 2)
        self.assertEqual(inv.stock_of("BOX"), 5)

    def test_remove_stock(self):
        inv = Inventory()
        inv.add_stock("BOX", 5)
        inv.remove_stock("BOX", 2)
        self.assertEqual(inv.stock_of("BOX"), 3)

    def test_remove_too_much_raises(self):
        inv = Inventory()
        inv.add_stock("BOX", 1)
        with self.assertRaises(ValueError):
            inv.remove_stock("BOX", 2)


if __name__ == "__main__":
    unittest.main()
