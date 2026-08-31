import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        System.out.println("=== ALGORITMOS FUNDAMENTAIS ===\n");

        // 1. Numero primo
        int num = 9;
        System.out.println("1. Primo");
        System.out.println("   O numero " + num + (Primo.ehPrimo(num) ? " e primo" : " nao e primo"));

        // 2. Somatorio
        double[] numeros = {1, 2, 3, 4, 5};
        System.out.println("\n2. Somatorio");
        System.out.println("   Soma de " + Arrays.toString(numeros) + " = " + Somatorio.somatorio(numeros));

        // 3. Fibonacci
        int n = 8;
        System.out.println("\n3. Fibonacci");
        System.out.println("   Termo " + n + " = " + Fibonacci.fibonacci(n));

        // 4. Maximo divisor comum
        int a = 48;
        int b = 18;
        System.out.println("\n4. Maximo Divisor Comum");
        System.out.println("   MDC(" + a + ", " + b + ") = " + Mdc.mdc(a, b));

        // 5. Ordenacao com Quicksort
        int[] lista = {5, 3, 8, 1, 9, 2, 7};
        System.out.println("\n5. Quicksort");
        System.out.println("   Antes:  " + Arrays.toString(lista));
        Quicksort.quicksort(lista, 0, lista.length - 1);
        System.out.println("   Depois: " + Arrays.toString(lista));

        // 6. Contagem
        double[] dados = {1, 2.5, 3, 4.7, 5};
        System.out.println("\n6. Contagem");
        System.out.println("   Valores inteiros em " + Arrays.toString(dados) + ": " + Contagem.contarInteiros(dados));
    }
}