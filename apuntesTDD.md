# TDD

libro XP Explained second edition 


## Values
- communication
- simplicity
- feedback
- courage (honesty)
- respect (2004)

**With XP and TDD your code will naturally follow the previous values**

When doing TDD you spend less time debugging because you write code that already works

We do Pair programming because we enforce communication and give feedback. With pair programming we don't even need Pull Requests. Learning from others. Promotes respect.

## Principles


# The TDD process
- first of all **THINK** (before you start coding)
Do an analisis and identify the TODO list
Then ORDER it from simple to complex. Start with the happy path (not by the edge cases)
- **RED TEST** 
- 20 seconds to **make it pass** (don't think, be quick and dirty)
- **Refactor**: better *naming*, good *abstractions*, *duplication* (DRY), *avoid surprises* in code to a reader (you are able to read the code and you understand what is going to do, it doesn't do other things that you don't expect). Reread your yesterday's code.

When you write an assert you have to have business in mind. Business should be able to understand.

On every test your production code should become more and more generic. But the text don't change.

Do small steps, if you write a boolean function your production code will return true or false. Don't overthink.

# Kata 1
http://osherove.com/tdd-kata-1/

# Kata 2: word wrap
"hola", 2 => "ho\nla"
"holamundo", 7 => "holamun\ndo"
"hola mundo", 7 => "hola\nmundo"
"abc", 5 => "abc"


## suggestions
- do microcommits: after a green, even sometimes after a red. 
- in js use pure functions (and closures for private functions)
- reasons to change: 
- simmetry and abstraction level: all functions to have the same level of abstraction
- do not aim for reusability
- transformation priority premise: use recursion before doing loops (see https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html)


## Other techniques
property-based testing

## Books
implementation patterns by Kent Beck

## Patterns
- guard clause
https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html 
- 

## Resources
xUnit Test Doubles: Mock, Spy, Stub, Fake, Dummie

## What is a good test
- fast
- Independent (one suite does not depend from other)
- Repeteable
- Self-validating
- Timely - write first if possible

And... when it breaks I don't wnt to debug

## Tips for test doubles
If I am mocking a query (getting the text of a textArea) i do a Stub.
If I am mocking an output (showing a formatted text in a TextArea) I do a Spy.

## Outcomes
- think before coding
- more pair programming
- KISS 
- Consider to use Mocks/Doubles
- Don't sourprise with your code
- Test as business requirements
  - Concise, precise, abstract
  - Don't duplicate test body in the description
  - Describe behaviour
- Refactor your tests (they are first class citizens)
- keep tests green when refactoring
- think harder if you can-t find baby steps
- unt tests can be big, can be BIG, they test behaviour
- TDD requires a big mindset change and discipline 

## contact
@carlosble
carlos.ble (instagram)
carlos@codesai.com