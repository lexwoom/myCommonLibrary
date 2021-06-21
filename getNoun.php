<?
                function getNoun($number, $one, $two, $five)
                {
                    $n = abs($number);
                    $n %= 100;
                    if ($n >= 5 && $n <= 20) {
                        return $five;
                    }
                    $n %= 10;
                    if ($n === 1) {
                        return $one;
                    }
                    if ($n >= 2 && $n <= 4) {
                        return $two;
                    }
                    return $five;
                }

                echo $arResult["TOTAL_COUNT"] . '&nbsp;' . getNoun(
                        $arResult["TOTAL_COUNT"],
                        'отзыв',
                        'отзыва',
                        'отзывов'
                    ) . ', средняя оценка&nbsp;' . round($arParams["RATING"], 1) . ''; ?>
