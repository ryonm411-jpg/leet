import unittest

from warehouse.pricing import order_total

PRICES = {"BOX": 250, "TAPE": 199}  # cents


class OrderTotalTests(unittest.TestCase):
    def test_small_order_has_no_discount(self):
        # 2 boxes at 250 + 1 tape at 199
        self.assertEqual(order_total([("BOX", 2), ("TAPE", 1)], PRICES), 699)

    def test_empty_order_is_free(self):
        self.assertEqual(order_total([], PRICES), 0)


class BulkDiscountTests(unittest.TestCase):
    """The feature in TASK.md. These fail until you build it."""

    def test_line_of_ten_gets_ten_percent_off(self):
        # 10 boxes = 2500, minus 10% = 2250
        self.assertEqual(order_total([("BOX", 10)], PRICES), 2250)

    def test_nine_units_get_no_discount(self):
        self.assertEqual(order_total([("BOX", 9)], PRICES), 2250)

    def test_discount_applies_per_line(self):
        # 10 boxes = 2250 after discount, 1 tape = 199, no discount
        self.assertEqual(order_total([("BOX", 10), ("TAPE", 1)], PRICES), 2449)

    def test_discount_rounds_down_to_whole_cents(self):
        # 11 tapes = 2189, 10% off = 1970.1, rounded down to 1970
        self.assertEqual(order_total([("TAPE", 11)], PRICES), 1970)


if __name__ == "__main__":
    unittest.main()
