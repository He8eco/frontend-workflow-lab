push(value) добавляет элемент в конец массива и мутирует массив.

pop() удаляет последний элемент и мутирует массив.

splice(startIndex, deleteCount, ...itemsToInsert)
начинает с startIndex
удаляет deleteCount элементов
может вставить новые элементы
мутирует массив

reverse() меняет порядок элементов внутри этого массива → мутирует.

sort() сортирует этот массив → мутирует.

map создаёт новый массив: берёт каждый элемент и превращает.

filter создаёт новый массив, оставляя только подходящие элементы.

slice(start, end) возвращает кусок массива как новый массив, исходник не трогает.

delete obj.key удаляет поле и мутирует объект.

obj.key = ... изменяет значение ключа и мутирует объект

map перебирает элементы из массива и преобразует

filter перебирает элементы из массива и фильтрует

find перебирает элементы из массива и находит первый подходящий условию элемент

some перебирает элементы и проверяет есть ли хотяб один элемент, который подходит условию

every перебирает элементы и проверяет все ли элементы подходят условию

## Snippet 1

### Prediction
1
3
2

### Actual
1
3
2

### Why
- 1 и 3 — sync
- setTimeout попал в обычную очередь задач
- после sync-кода выполнилось 2

## Snippet 2

### Prediction
A
C
B

### Actual
A
C
B

### Why
- A и C — sync
- then попал в microtasks
- после sync-кода выполнился B

## Snippet 3

### Prediction
start
end
then
timeout

### Actual
start
end
then
timeout

### Why
- start и end — sync
- then попал в microtasks
- setTimeout попал в обычную очередь задач
- после sync-кода сначала выполнился then, потом timer

## Snippet 4

### Prediction
1
4
2
3

### Actual
1
4
2
3

### Why
- 1 и 4 — sync
- then попал в microtasks
- после sync-кода сначала выполнилось 2, потом 3

## Snippet 5

### Prediction
1
A
2
B

### Actual
1
A
2
B

### Why
- 1, A и 2 — sync
- код после await попал в microtasks
- после sync-кода выполнилось B

## Snippet 6

### Prediction
start
X
end
Y
timer

### Actual
start
X
end
Y
timer

### Why
- start, X и end — sync
- код после await попал в microtasks
- setTimeout попал в обычную очередь задач
- после sync-кода сначала выполнился Y, потом timer

## Snippet 7

### Prediction
end
then done
await done

### Actual
end
then done
await done

### Why
- end — sync
- сначала then попал в microtasks, потом код после await
- после sync-кода сначала выполнился then done, потом await done

## Snippet 8

### Prediction
D
A
B
C

### Actual
D
A
B
C

### Why
- D — sync
- then попал в microtasks
- setTimeout попал в обычную очередь задач
- после sync-кода сначала выполнился A и B, потом C

## Snippet 9

### Prediction
start
1
end
2
3

### Actual
start
1
end
2
3

### Why
- start, 1 и end — sync
- код после await попал в microtasks
- после sync-кода сначала выполнился 2, потом 3

## Snippet 10

### Prediction
1
A
4
3
B
2

### Actual
1
A
4
3
B
2

### Why
- 1, A и 4 — sync
- then и код после await попали в microtasks
- setTimeout попал в обычную очередь задач
- после sync-кода сначала выполнился 3 и B, потом 2