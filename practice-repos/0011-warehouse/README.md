# Warehouse

A tiny order system: stock levels (`warehouse/inventory.py`), order fulfilment (`warehouse/orders.py`) and prices (`warehouse/pricing.py`). Tests live in `tests/`.

Run every test from this folder, the one that holds `warehouse/` and `tests/`. Don't run it from inside `tests/`: Python won't find the `warehouse` package, and every test will fail with `ModuleNotFoundError`.

    py -m unittest -v

On Mac or Linux, use `python3` instead of `py`.
