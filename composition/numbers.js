import { ref, reactive, computed, watch, watchEffect, onMounted } from "vue";

export function useNumbers() {
    const count = ref(0);
    const a = ref(0);
    const b = ref(0);
    const history = ref([]);
    // complex
    const numbers = reactive({
        a: 0,
        b: 0,
    });
    const increment = () => {
        count.value++;
    };
    const increase = (num) => {
        numbers[num] += 1;
    };
    const total = computed(() => count.value + numbers.a + numbers.b);

    // watch(
    //     numbers,
    //     (newVal) => {
    //         console.log(newVal.a, newVal.b);
    //     },
    //     {
    //         immediate: true,
    //     }
    // );

    watchEffect(() => {
        console.log(numbers.a);
    });

    watch([a, b], ([newA, newB], [oldA, oldB]) => {
        if (oldA !== newA) history.value.push(`a: ${oldA}->${newA}`);
        if (oldB !== newB) history.value.push(`b: ${oldB}->${newB}`);
    });

    onMounted(() => {
        console.log("Mounted");
    });

    return {
        total,
        increment,
        increase,
        count,
        numbers,
        a,
        b,
        history,
    };
}
