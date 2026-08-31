import java.util.Arrays;

public class Quicksort {

    public static void quicksort(int[] arr, int inicio, int fim) {
        if (inicio < fim) {
            int p = particionar(arr, inicio, fim);
            quicksort(arr, inicio, p - 1);
            quicksort(arr, p + 1, fim);
        }
    }

    public static int particionar(int[] arr, int inicio, int fim) {
        int pivo = arr[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (arr[j] <= pivo) {
                i++;
                trocar(arr, i, j);
            }
        }
        trocar(arr, i + 1, fim);
        return i + 1;
    }

    public static void trocar(int[] arr, int x, int y) {
        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    public static void main(String[] args) {
        int[] lista = {5, 3, 8, 1, 9, 2, 7};

        System.out.println("--- Ordenacao com Quicksort ---");
        System.out.println("Antes:  " + Arrays.toString(lista));
        quicksort(lista, 0, lista.length - 1);
        System.out.println("Depois: " + Arrays.toString(lista));
    }
}