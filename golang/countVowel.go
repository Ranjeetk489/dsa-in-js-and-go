package main

import (
	"regexp"
	"strings"
)

func GetCount(str string) (count int) {
	for _, c := range str {
		switch c {
		case 'a', 'e', 'i', 'o', 'u':
			count++
		}
	}
	return count
}

func GetCount2(strn string) int {
	count := 0

	vowels := []string{"a", "e", "i", "o", "u"}

	for _, vowel := range vowels {
		count += strings.Count(strn, vowel)
	}

	return count
}

func GetCount3(str string) (count int) {
	r := regexp.MustCompile("[aeiou]")
	vowels := r.FindAllString(str, -1)
	return len(vowels)
}
func GetCount4(str string) (count int) {
	for i := range str {
		switch str[i] {
		case 'a', 'e', 'i', 'o', 'u':
			count++
		}
	}
	return count
}

func GetCount5(str string) (count int) {

	return strings.Count(str, "a") + strings.Count(str, "e") + strings.Count(str, "i") + strings.Count(str, "o") + strings.Count(str, "u")
}
