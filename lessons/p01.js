(window.PY_LESSONS = window.PY_LESSONS || []).push({
  "id": "p01",
  "num": 101,
  "label": "P1",
  "kind": "probleme",
  "track": "problemes",
  "title": {
    "fr": "Les nombres premiers et le crible d'Ératosthène",
    "en": "Prime numbers and the Sieve of Eratosthenes"
  },
  "intro": {
    "fr": "Un nombre premier a exactement deux diviseurs : 1 et lui-même. En quatre étapes, tu vas écrire un test de primalité rapide, lister les nombres premiers, programmer le crible d'Ératosthène (une méthode vieille de 2 200 ans) et compter les nombres premiers jumeaux.",
    "en": "A prime number has exactly two divisors: 1 and itself. In four steps you'll write a fast primality test, list the primes, program the Sieve of Eratosthenes (a method 2,200 years old) and count twin primes."
  },
  "blocks": [
    {
      "t": "h",
      "fr": "Pourquoi s'arrêter à √n ?",
      "en": "Why stop at √n?"
    },
    {
      "t": "p",
      "fr": "Si n = a × b avec a ≤ b, alors a × a ≤ n. Donc si n a un diviseur autre que 1 et n, il en a un qui vérifie d × d ≤ n. Pour tester 1 000 000 007, il suffit d'essayer les d jusqu'à 31 622 au lieu d'un milliard.",
      "en": "If n = a × b with a ≤ b, then a × a ≤ n. So if n has a divisor other than 1 and n, it has one with d × d ≤ n. To test 1,000,000,007 you only need to try d up to 31,622 instead of a billion."
    },
    {
      "t": "h",
      "fr": "Le crible d'Ératosthène",
      "en": "The Sieve of Eratosthenes"
    },
    {
      "t": "p",
      "fr": "On écrit tous les entiers de 2 à N. On prend le premier nombre non barré (2) : il est premier, et on barre tous ses multiples. On recommence avec le suivant non barré (3), puis 5, puis 7… À la fin, les nombres non barrés sont les nombres premiers.",
      "en": "Write all the integers from 2 to N. Take the first number not crossed out (2): it's prime, and you cross out all its multiples. Start again with the next one not crossed out (3), then 5, then 7… At the end, the numbers left are the primes."
    },
    {
      "t": "note",
      "fr": "Dans le programme, « barrer » le nombre k veut dire mettre <code>False</code> dans la case d'index k d'une liste de booléens.",
      "en": "In the program, \"crossing out\" the number k means putting <code>False</code> in the slot at index k of a list of booleans."
    }
  ],
  "exercises": [
    {
      "t": "code",
      "id": "p01-e1",
      "title": {
        "fr": "Étape 1 · Un test de primalité rapide",
        "en": "Step 1 · A fast primality test"
      },
      "prompt": {
        "fr": "Écris <code>est_premier(n)</code> qui renvoie <code>True</code> si n est premier, <code>False</code> sinon. Pour aller vite, ne teste les diviseurs d que tant que <code>d * d <= n</code>. Le dernier test utilise 1 000 000 007 : une boucle jusqu'à n serait beaucoup trop lente.",
        "en": "Write <code>est_premier(n)</code> that returns <code>True</code> if n is prime, <code>False</code> otherwise. To be fast, only test the divisors d while <code>d * d <= n</code>. The last test uses 1,000,000,007: a loop up to n would be far too slow."
      },
      "starter": {
        "fr": "def est_premier(n):\n    if n < 2:\n        return False\n    d = 2\n    ",
        "en": "def est_premier(n):\n    if n < 2:\n        return False\n    d = 2\n    "
      },
      "tests": [
        {
          "call": "est_premier(2)",
          "expect": "True"
        },
        {
          "call": "est_premier(1)",
          "expect": "False"
        },
        {
          "call": "est_premier(49)",
          "expect": "False"
        },
        {
          "call": "est_premier(97)",
          "expect": "True"
        },
        {
          "call": "est_premier(999999999)",
          "expect": "False"
        },
        {
          "call": "est_premier(1000000007)",
          "expect": "True"
        }
      ],
      "require": [
        "while",
        "return"
      ],
      "hints": [
        {
          "fr": "C'est une boucle non bornée : on ne sait pas d'avance jusqu'où aller, on s'arrête quand <code>d * d</code> dépasse n.",
          "en": "It's an unbounded loop: you don't know in advance how far to go, you stop when <code>d * d</code> exceeds n."
        },
        {
          "fr": "Dans <code>while d * d <= n:</code>, si d divise n (<code>n % d == 0</code>), renvoie <code>False</code> ; sinon passe au d suivant.",
          "en": "Inside <code>while d * d <= n:</code>, if d divides n (<code>n % d == 0</code>), return <code>False</code>; otherwise move on to the next d."
        },
        {
          "fr": "<code>while d * d <= n:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if n % d == 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>return False</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>d = d + 1</code><br>puis, après la boucle, <code>return True</code>.",
          "en": "<code>while d * d <= n:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if n % d == 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>return False</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>d = d + 1</code><br>then, after the loop, <code>return True</code>."
        }
      ],
      "solution": "def est_premier(n):\n    if n < 2:\n        return False\n    d = 2\n    while d * d <= n:\n        if n % d == 0:\n            return False\n        d = d + 1\n    return True"
    },
    {
      "t": "code",
      "id": "p01-e2",
      "carry": true,
      "title": {
        "fr": "Étape 2 · La liste des nombres premiers",
        "en": "Step 2 · The list of primes"
      },
      "prompt": {
        "fr": "En utilisant <code>est_premier</code>, écris <code>premiers(N)</code> qui renvoie la liste des nombres premiers inférieurs ou égaux à N.",
        "en": "Using <code>est_premier</code>, write <code>premiers(N)</code> that returns the list of primes less than or equal to N."
      },
      "starter": {
        "fr": "def premiers(N):\n    ",
        "en": "def premiers(N):\n    "
      },
      "tests": [
        {
          "call": "premiers(30)",
          "expect": "[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]"
        },
        {
          "call": "premiers(1)",
          "expect": "[]"
        },
        {
          "call": "premiers(2)",
          "expect": "[2]"
        },
        {
          "call": "len(premiers(1000))",
          "expect": "168",
          "desc": {
            "fr": "il y a 168 nombres premiers jusqu'à 1 000",
            "en": "there are 168 primes up to 1,000"
          }
        }
      ],
      "require": [
        "return"
      ],
      "hints": [
        {
          "fr": "Garde les entiers n de 2 à N pour lesquels <code>est_premier(n)</code> est vrai.",
          "en": "Keep the integers n from 2 to N for which <code>est_premier(n)</code> is true."
        },
        {
          "fr": "Une liste en compréhension avec une condition fait ça en une ligne.",
          "en": "A list comprehension with a condition does this in one line."
        },
        {
          "fr": "<code>return [n for n in range(2, N + 1) if est_premier(n)]</code>",
          "en": "<code>return [n for n in range(2, N + 1) if est_premier(n)]</code>"
        }
      ],
      "solution": "def premiers(N):\n    return [n for n in range(2, N + 1) if est_premier(n)]"
    },
    {
      "t": "code",
      "id": "p01-e3",
      "carry": true,
      "title": {
        "fr": "Étape 3 · Le crible d'Ératosthène",
        "en": "Step 3 · The Sieve of Eratosthenes"
      },
      "prompt": {
        "fr": "Écris <code>crible(N)</code> qui renvoie la liste des nombres premiers ≤ N avec la méthode du crible : une liste <code>t</code> de N + 1 booléens, où <code>t[k]</code> dit si k n'est pas (encore) barré. Le dernier test va jusqu'à 200 000 : il faut que ce soit rapide.",
        "en": "Write <code>crible(N)</code> that returns the list of primes ≤ N using the sieve: a list <code>t</code> of N + 1 booleans, where <code>t[k]</code> says whether k isn't crossed out (yet). The last test goes up to 200,000, so it has to be fast."
      },
      "starter": {
        "fr": "def crible(N):\n    t = (N + 1) * [True]\n    t[0] = False\n    t[1] = False\n    ",
        "en": "def crible(N):\n    t = (N + 1) * [True]\n    t[0] = False\n    t[1] = False\n    "
      },
      "tests": [
        {
          "call": "crible(30)",
          "expect": "[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]"
        },
        {
          "call": "crible(2)",
          "expect": "[2]"
        },
        {
          "call": "crible(500) == premiers(500)",
          "expect": "True",
          "desc": {
            "fr": "crible(500) donne la même liste que premiers(500)",
            "en": "crible(500) gives the same list as premiers(500)"
          }
        },
        {
          "call": "len(crible(200000))",
          "expect": "17984",
          "desc": {
            "fr": "crible(200000) trouve 17 984 nombres premiers, rapidement",
            "en": "crible(200000) finds 17,984 primes, quickly"
          }
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "Parcours k de 2 à N. Si <code>t[k]</code> est encore vrai, k est premier : barre alors tous ses multiples 2k, 3k, 4k…",
          "en": "Go through k from 2 to N. If <code>t[k]</code> is still true, k is prime: then cross out all its multiples 2k, 3k, 4k…"
        },
        {
          "fr": "Les multiples de k jusqu'à N s'obtiennent avec <code>range(2 * k, N + 1, k)</code>. Pour chacun, mets <code>t[m] = False</code>. À la fin, garde les k tels que <code>t[k]</code> est vrai.",
          "en": "The multiples of k up to N are <code>range(2 * k, N + 1, k)</code>. For each one, set <code>t[m] = False</code>. At the end, keep the k such that <code>t[k]</code> is true."
        },
        {
          "fr": "<code>for k in range(2, N + 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if t[k]:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>for m in range(2 * k, N + 1, k):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>t[m] = False</code><br><code>return [k for k in range(N + 1) if t[k]]</code>",
          "en": "<code>for k in range(2, N + 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if t[k]:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>for m in range(2 * k, N + 1, k):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>t[m] = False</code><br><code>return [k for k in range(N + 1) if t[k]]</code>"
        }
      ],
      "solution": "def crible(N):\n    t = (N + 1) * [True]\n    t[0] = False\n    t[1] = False\n    for k in range(2, N + 1):\n        if t[k]:\n            for m in range(2 * k, N + 1, k):\n                t[m] = False\n    return [k for k in range(N + 1) if t[k]]",
      "after": {
        "fr": "Le crible ne fait aucune division : il ne fait que barrer des cases. C'est pour ça qu'il est si rapide pour trouver tous les nombres premiers d'un coup.",
        "en": "The sieve never divides: it only crosses out slots. That's why it's so fast at finding all the primes at once."
      }
    },
    {
      "t": "code",
      "id": "p01-e4",
      "carry": true,
      "title": {
        "fr": "Étape 4 · Les nombres premiers jumeaux",
        "en": "Step 4 · Twin primes"
      },
      "prompt": {
        "fr": "Deux nombres premiers sont jumeaux quand leur écart vaut 2, comme 11 et 13. Écris <code>jumeaux(N)</code> qui renvoie le nombre de couples (p ; p + 2) de nombres premiers avec p + 2 ≤ N. On ne sait toujours pas s'il en existe une infinité !",
        "en": "Two primes are twins when they differ by 2, like 11 and 13. Write <code>jumeaux(N)</code> that returns the number of pairs (p ; p + 2) of primes with p + 2 ≤ N. Nobody knows yet whether there are infinitely many!"
      },
      "starter": {
        "fr": "def jumeaux(N):\n    P = crible(N)\n    ",
        "en": "def jumeaux(N):\n    P = crible(N)\n    "
      },
      "tests": [
        {
          "call": "jumeaux(10)",
          "expect": "2",
          "desc": {
            "fr": "jusqu'à 10 : (3 ; 5) et (5 ; 7)",
            "en": "up to 10: (3 ; 5) and (5 ; 7)"
          }
        },
        {
          "call": "jumeaux(4)",
          "expect": "0"
        },
        {
          "call": "jumeaux(100)",
          "expect": "8"
        },
        {
          "call": "jumeaux(1000)",
          "expect": "35"
        }
      ],
      "require": [
        "return"
      ],
      "hints": [
        {
          "fr": "Dans la liste P (triée), deux nombres premiers jumeaux sont forcément voisins : compare chaque élément au suivant.",
          "en": "In the sorted list P, two twin primes are always next to each other: compare each element with the next one."
        },
        {
          "fr": "Parcours les index i de 0 à <code>len(P) - 2</code> et compte les fois où <code>P[i + 1] - P[i] == 2</code>.",
          "en": "Loop over the indexes i from 0 to <code>len(P) - 2</code> and count the times where <code>P[i + 1] - P[i] == 2</code>."
        },
        {
          "fr": "<code>c = 0</code><br><code>for i in range(len(P) - 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if P[i + 1] - P[i] == 2:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>c = c + 1</code><br><code>return c</code>",
          "en": "<code>c = 0</code><br><code>for i in range(len(P) - 1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if P[i + 1] - P[i] == 2:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>c = c + 1</code><br><code>return c</code>"
        }
      ],
      "solution": "def jumeaux(N):\n    P = crible(N)\n    c = 0\n    for i in range(len(P) - 1):\n        if P[i + 1] - P[i] == 2:\n            c = c + 1\n    return c",
      "after": {
        "fr": "Bravo, problème terminé ! La « conjecture des nombres premiers jumeaux » est l'une des grandes questions ouvertes des mathématiques.",
        "en": "Well done, problem solved! The \"twin prime conjecture\" is one of the great open questions in mathematics."
      }
    }
  ]
});
