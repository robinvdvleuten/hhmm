import test from 'ava'
import fn from '../lib'

function hhmm (t, input, expected) {
  t.is(fn(input), expected)
}

test(hhmm, '22:17', 80220000)
test(hhmm, '22:00', 79200000)
test(hhmm, '22', 79200000)
test(hhmm, '00:22', 1320000)
test(hhmm, '01', 3600000)
test(hhmm, '00:01', 60000)
test(hhmm, '00:1', 60000)
test(hhmm, '00:10', 600000)
