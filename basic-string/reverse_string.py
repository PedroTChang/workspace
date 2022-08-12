# Write a function that returns the reverse of a given string.

def reverse(string):
    result = ""
    index = len(string) - 1
    while index >= 0:
        result += string[index]
        index -= 1
    return result
print(reverse("abcde"))
