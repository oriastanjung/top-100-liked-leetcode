function removeElement(nums: number[], val: number): number {
    const arr : number[] = []
    for (let i = 0; i <nums.length; i++){
        if (nums[i] !== val){
            arr.push(nums[i])
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (typeof(arr[i]) === "number" ) {
            nums[i] = arr[i]
        }else{
            nums[i] = nums[i]
        }
    }
    return arr.length
};

const nums: number[] = [3,2,2,3]; // Input array
const expectedNums: number[] = [2,2]; // The expected answer with correct length

const k: number = removeElement(nums,3); // Calls your implementation
console.assert(k === expectedNums.length);
for (let i = 0; i < k; i++) {
    console.assert(nums[i] === expectedNums[i]);
}
