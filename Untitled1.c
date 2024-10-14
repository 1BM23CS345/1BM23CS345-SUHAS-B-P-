#include <stdio.h>
#include <stdbool.h>

#define SIZE 5

int A[SIZE];
int front = -1, rear = -1;

bool IsEmpty() {
    return front == -1 && rear == -1;
}

bool IsFull() {
    return (rear + 1) % SIZE == front;
}

void Enqueue(int x) {
    if (IsFull()) {
        printf("Queue is Full\n");
    } else {
        if (IsEmpty()) {
            front = 0;
        }
        rear = (rear + 1) % SIZE;
        A[rear] = x;
    }
}

void DeQueue() {
    if (IsEmpty()) {
        printf("Queue is Empty\n");
    } else {
        printf("%d is deleted\n", A[front]);
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            front = (front + 1) % SIZE;
        }
    }
}

void Display() {
    if (IsEmpty()) {
        printf("Queue is Empty\n");
    } else {
        printf("Queue elements: ");
        int i = front;
        while (1) {
            printf("%d ", A[i]);
            if (i == rear) break;
            i = (i + 1) % SIZE;
        }
        printf("\n");
    }
}

int main() {
    int choice, x;
    while (1) {
        printf("Press 1: Insert, 2: Delete, 3: Display, 4: Exit\n");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter value to insert: ");
                scanf("%d", &x);
                Enqueue(x);
                break;
            case 2:
                DeQueue();
                break;
            case 3:
                Display();
                break;
            case 4:
                return 0;
            default:
                printf("Enter a correct value\n");
        }
    }
}
