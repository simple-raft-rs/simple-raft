/*
 * Copyright (C) 2019 Open Whisper Systems
 * Copyright (C) 2021 jessa0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

macro_rules! assert_true {
    ($($arg:tt)*) => ({
        assert!($($arg)+);
        true
    });
}

macro_rules! assert_match {
    ($pat:pat = $expr:expr) => ({
        if let $pat = $expr {
            true
        } else {
            panic!("assertion failed: `$pat = $expr`")
        }
    });
    ($pat:pat = $expr:expr, $($arg:tt)*) => ({
        if let $pat = $expr {
            true
        } else {
            panic!("assertion failed: `$pat = $expr`: {}", format_args!($($arg)+))
        }
    });
}

macro_rules! verbose {
    ($($arg:tt)*) => (
        log::debug!($($arg)*)
    );
}
