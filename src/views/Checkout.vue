<template class="min-h-full">
    <div
        v-if="Object.keys(param).length === 0"
        class="container mx-auto max-w-prose p-2 min-h-screen flex items-center justify-center"
    >
        <div class="bg-blueGray py-62 px-26 rounded-3xl">
            <span class="font-bold text-3xl">Cart is empty</span>
            <div class="flex justify-center mt-12">
                <button class="learn-more" @click="goToHome">
                    Keep Shopping
                    <i class="i-mdi:chevron-right text-4xl mb-1"></i>
                </button>
            </div>
        </div>
    </div>
    <div
        v-else
        class="container mx-auto relative px-6 pt-8 sm:px-16 sm:pt-10 lg:px-32 lg:pt-12"
    >
        <h1 class="text-4xl font-bold mb-4 px-3">Checkout</h1>
        <div class="items-container">
            <div class="item-box">
                <div
                    v-if="param.from == 'M4'"
                    class="grid grid-cols-1 gap-8 mb-5"
                >
                    <div class="flex">
                        <div class="w-1/3">
                            <img src="/src/assets/H.webp" alt="vintage bag" />
                        </div>
                        <div class="flex flex-col justify-between w-2/3 pl-6">
                            <div>
                                <h4>Sennheiser Momentum 4 Wireless</h4>
                                <p class="whitespace-no-wrap">
                                    <span
                                        class="text-lg text-orange-400 font-semibold"
                                        >$299.99</span
                                    >
                                </p>
                            </div>
                            <div class="item-count">
                                <button><i class="i-mdi:minus"></i></button>
                                <span class="mx-6 font-bold text-xl">1</span>
                                <button><i class="i-mdi:plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-if="param.from == 'XM4'"
                    class="grid grid-cols-1 gap-8 mb-5"
                >
                    <div class="flex">
                        <div class="w-1/3">
                            <img
                                src="/src/assets/HXM4~3.webp"
                                alt="vintage bag"
                            />
                        </div>
                        <div class="flex flex-col justify-between w-2/3 pl-6">
                            <div>
                                <h4>Sony WH-1000XM4</h4>
                                <p class="whitespace-no-wrap">
                                    <span
                                        class="text-lg text-orange-400 font-semibold"
                                        >$349.99</span
                                    >
                                </p>
                            </div>
                            <div class="item-count">
                                <button><i class="i-mdi:minus"></i></button>
                                <span class="mx-6 font-bold text-xl">1</span>
                                <button><i class="i-mdi:plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="param.from == 'QCU'" class="grid grid-cols-1 gap-8">
                    <div class="flex">
                        <div class="w-1/3">
                            <img
                                src="/src/assets/HBOSE~3.webp"
                                alt="vintage bag"
                            />
                        </div>
                        <div class="flex flex-col justify-between w-2/3 pl-6">
                            <div>
                                <h4>Bose QuietComfort Ultra</h4>
                                <p class="whitespace-no-wrap">
                                    <span
                                        class="text-lg text-orange-400 font-semibold"
                                        >$429.99</span
                                    >
                                </p>
                            </div>
                            <div class="item-count">
                                <button><i class="i-mdi:minus"></i></button>
                                <span class="mx-6 font-bold text-xl">1</span>
                                <button><i class="i-mdi:plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-total">
                    <div>
                        <span class="text-2xl">Shipping</span>
                        <span class="text-lg">$9.99</span>
                    </div>
                    <div>
                        <span class="text-2xl">Total</span>
                        <span class="text-lg">$309.98</span>
                    </div>
                </div>
            </div>
            <div class="form-container">
                <form
                    name="checkoutForm"
                    onsubmit="return validate()"
                    @submit="goToThankYou"
                >
                    <h3 class="text-lg font-bold mb-3">Contact information</h3>
                    <div class="relative mb-4">
                        <label for="email"> Email </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email..."
                            required
                        />
                    </div>
                    <div class="relative mb-10">
                        <label for="email"> Phone </label>
                        <input
                            id="phone"
                            type="number"
                            placeholder="Enter your phone..."
                            required
                        />
                    </div>

                    <h3 class="text-lg font-bold mt-2 mb-3">
                        Shipping address
                    </h3>
                    <div class="relative mb-4">
                        <label for="name"> Full name </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div class="relative mb-4">
                        <label for="address"> Address </label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Your address..."
                            required
                        />
                    </div>
                    <div class="relative mb-4">
                        <label for="city"> City </label>
                        <input
                            id="city"
                            type="text"
                            placeholder="Your city..."
                            required
                        />
                    </div>
                    <div class="flex mb-10">
                        <div class="relative flex-1">
                            <label for="country">Country</label>
                            <select id="country" required>
                                <option selected disabled>
                                    Choose country...
                                </option>
                                <option>United States</option>
                                <option>South African</option>
                                <option>Zambia</option>
                                <option>Zimbabwe</option>
                            </select>
                        </div>
                        <div class="relative ml-6 flex-1">
                            <label for="postal-code">Postal Code</label>
                            <input
                                id="postal-code"
                                type="text"
                                placeholder="Your postal code..."
                                required
                            />
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mt-2 mb-3">
                        Payment information
                    </h3>
                    <div>
                        <input
                            id="card"
                            type="text"
                            placeholder="Card number..."
                            required
                        />
                        <div class="flex mb-4 gap-2 mt-4">
                            <div>
                                <input
                                    id="expiry"
                                    type="text"
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    id="cvc"
                                    type="text"
                                    placeholder="CVC"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <button id="submitted" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const param = router.currentRoute.value.query

const goToThankYou = () => {
    router.push({ name: 'ThankYou' })
}

const goToHome = () => {
    router.push({ name: 'Home' })
}

onMounted(() => {
    console.log()
})
</script>
