<template>
    <main>
        <div>
            <h1>Checkout</h1>
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input id="name" type="text" name="name" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input id="email" type="email" name="email" required />
                </div>
                <div>
                    <label for="address">Address:</label>
                    <input id="address" type="text" name="address" required />
                </div>
                <div>
                    <label for="city">City:</label>
                    <input id="city" type="text" name="city" required />
                </div>
                <div>
                    <label for="state">State:</label>
                    <input id="state" type="text" name="state" required />
                </div>
                <div>
                    <label for="zip">Zip Code:</label>
                    <input id="zip" type="text" name="zip" required />
                </div>
                <div>
                    <label for="card-number">Card Number:</label>
                    <input
                        id="card-number"
                        type="text"
                        name="card-number"
                        required
                    />
                </div>
                <div>
                    <label for="exp-date">Expiration Date:</label>
                    <input id="exp-date" type="text" name="exp-date" required />
                </div>
                <div>
                    <label for="cvv">CVV:</label>
                    <input id="cvv" type="text" name="cvv" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </main>
</template>
