// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

import java.util.Arrays;
import java.util.HashMap;

public class TwoSum {

    public static int[] twoSum(int[] num, int target) {
        var mapNums = new HashMap<Integer, Integer>();

        for (var i = 0; i < num.length; i++) {
            mapNums.put(num[i], i);
        }

        for (var i = 0; i < num.length; i++) {
            var complement = target - num[i];

            if (mapNums.containsKey(complement) && mapNums.get(complement) != i) {
                int[] result = { mapNums.get(complement), i };
                return result;
            }

        }

        int[] result = {};

        return result;

    }

    public static void main(String[] args) {

        int[] nums1 = { 2, 7, 11, 15 };
        int[] nums2 = { 3, 2, 4 };
        int[] nums3 = { 3, 3 };

        System.out.println(Arrays.toString(twoSum(nums1, 9)));
        System.out.println(Arrays.toString(twoSum(nums2, 6)));
        System.out.println(Arrays.toString(twoSum(nums3, 6)));

    }

}
