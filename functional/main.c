#include <stdio.h>

int soma (int n)
{
  int total = 0;
  for (int i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

int main ()
{
  printf("n: 10, soma(10): %i\n", soma(10));
}


