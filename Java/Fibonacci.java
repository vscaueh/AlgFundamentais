public class Fibonacci {

    public static long fibonacci(int n) {
        if (n == 0) return 0;

        long anterior = 0;
        long atual = 1;

        for (int i = 2; i <= n; i++) {
            long proximo = anterior + atual;
            anterior = atual;
            atual = proximo;
        }
        return atual;
    }

    public static void main(String[] args) {
        int n = 8;

        System.out.println("--- Fibonacci ---");
        for (int i = 0; i <= n; i++) {
            System.out.println("Termo " + i + ": " + fibonacci(i));
        }
    }
}