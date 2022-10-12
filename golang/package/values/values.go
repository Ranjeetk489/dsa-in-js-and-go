package values

import "fmt"

func Values() int {
	fmt.Println("1+1", 1+1)
	fmt.Println("1>1",true)
	fmt.Println(true && false)
	return 1
}