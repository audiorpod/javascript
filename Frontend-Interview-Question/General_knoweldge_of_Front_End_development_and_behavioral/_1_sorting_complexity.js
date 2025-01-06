// 


/**
 * Understanding sorting algorithms is crucial for any software engineer, including Front-End developers, as sorting is foundational for optimizing performance in applications. Here's a detailed breakdown:

---

## **Common Sorting Algorithms and Their Characteristics**

### 1. Bubble Sort
- **How It Works**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Passes through the list are repeated until it is sorted.
- **Time Complexity**:
  - Average: (O(n^2))
  - Worst Case: (O(n^2))
  - Best Case (Already Sorted): (O(n))
- **Space Complexity**: (O(1)) (in-place sorting)
- **Stability**: Yes

---

### 2. **Selection Sort**
- **How It Works**: Repeatedly selects the smallest element from the unsorted portion and swaps it with the first element of the unsorted portion.
- **Time Complexity**:
  - Average: (O(n^2))
  - Worst Case: (O(n^2))
  - Best Case: (O(n^2))
- **Space Complexity**: (O(1))
- **Stability**: No (swapping may break the relative order of equal elements)

---

### 3. **Insertion Sort**
- **How It Works**: Builds the sorted list one element at a time by inserting each element into its correct position in an already sorted portion.
- **Time Complexity**:
  - Average: (O(n^2))
  - Worst Case: (O(n^2))
  - Best Case (Already Sorted): (O(n))
- **Space Complexity**: (O(1))
- **Stability**: Yes

---

### 4. **Merge Sort**
- **How It Works**: Divides the array into halves, recursively sorts each half, and then merges the sorted halves.
- **Time Complexity**:
  - Average: (O(n log n))
  - Worst Case: (O(n log n))
  - Best Case: (O(n log n))
- **Space Complexity**: (O(n)) (requires auxiliary space for merging)
- **Stability**: Yes

---

### 5. **Quick Sort**
- **How It Works**: Picks a pivot element, partitions the array into elements less than and greater than the pivot, and recursively applies the same strategy.
- **Time Complexity**:
  - Average: (O(n log n))
  - Worst Case (Unbalanced Partition): (O(n^2))
  - Best Case (Balanced Partition): (O(n log n))
- **Space Complexity**: (O(log n)) (in-place but recursive)
- **Stability**: No (partitioning may disrupt the relative order of equal elements)

---

### 6. **Heap Sort**
- **How It Works**: Builds a max heap, repeatedly extracts the maximum element, and reconstructs the heap.
- **Time Complexity**:
  - Average: (O(n log n))
  - Worst Case: (O(n log n))
  - Best Case: (O(n log n))
- **Space Complexity**: (O(1))
- **Stability**: No (swapping may break the relative order of equal elements)

---

### 7. **Counting Sort**
- **How It Works**: Counts the occurrences of each element, and calculates the positions based on counts. Works only for integers in a known range.
- **Time Complexity**:
  - Average: (O(n + k)) (where (k) is the range of input values)
  - Worst Case: (O(n + k))
  - Best Case: (O(n + k))
- **Space Complexity**: (O(n + k))
- **Stability**: Yes

---

### 8. **Radix Sort**
- **How It Works**: Processes elements digit by digit (least significant to most significant) using a stable sub-sorting algorithm (e.g., counting sort).
- **Time Complexity**:
  - Average: (O(n \cdot d)) (where (d) is the number of digits in the largest number)
  - Worst Case: (O(n \cdot d))
  - Best Case: (O(n \cdot d))
- **Space Complexity**: (O(n + k))
- **Stability**: Yes

---

### 9. **Bucket Sort**
- **How It Works**: Distributes elements into a fixed number of buckets, sorts each bucket (using another sorting algorithm), and concatenates the results.
- **Time Complexity**:
  - Average: (O(n + k)) (depends on the distribution and the sorting algorithm used for buckets)
  - Worst Case: (O(n^2)) (if all elements fall into one bucket)
  - Best Case: (O(n + k))
- **Space Complexity**: (O(n + k))
- **Stability**: Depends on the algorithm used for sorting buckets.

---

## **Summary Table**

| **Algorithm**      |  Average Case| Worst Case  | Space Complexity  |   Stable    |
|------------------- |--------------|-------------|-------------------|-------------|
| Bubble Sort        | (O(n^2)      | (O(n^2)     | (O(1)             | Yes         |
| Selection Sort     | (O(n^2)      | (O(n^2)     | (O(1)             | No          |
| Insertion Sort     | (O(n^2)      | (O(n^2)     | (O(1)             | Yes         |
| Merge Sort         | (O(n \log n) | (O(n \log n)| (O(n)             | Yes         |
| Quick Sort         | (O(n \log n) | (O(n^2)     | (O(\log n)        | No          |
| Heap Sort          | (O(n \log n) | (O(n \log n)| (O(1)             | No          |
| Counting Sort      | (O(n + k)    | (O(n + k)   | (O(n + k)         | Yes         |
| Radix Sort         | (O(n \cdot d)| (O(n \cdot d)| (O(n + k)        | Yes         |
| Bucket Sort        | (O(n + k)    | (O(n^2)     | (O(n + k)         | Depends     |

---

### **Stability**
- Stable sorting algorithms preserve the relative order of equal elements (e.g., Merge Sort, Bubble Sort).
- Unstable algorithms, like Quick Sort or Heap Sort, may reorder equal elements during their operations.

Knowing these trade-offs can help you select the right algorithm based on the problem's requirements!


 */