alert('Поменять местами столбцы, содержащие минимальный и максимальный элементы');
var number_of_lines=prompt('Введите количество строк', '');
var number_of_columns=prompt('Введите количество столбцов', '');
if (isNaN(Number(number_of_lines)) || isNaN(Number(number_of_columns)) || Number(number_of_lines)%1!=0 || Number(number_of_columns)%1!=0 || number_of_lines=='' || number_of_columns==''){
    alert('Количество строк и столбцов должны быть целыми числами');
} else{
    if (Number(number_of_lines)>0 && Number(number_of_lines)<=10 && Number(number_of_columns)>0 && Number(number_of_columns)<=10){
        var matrix=[];
        for (let i=0;i<Number(number_of_lines);i++){
            let help_array=[];
            for (let j=0;j<Number(number_of_columns);j++){
                help_array.push(Math.round(Math.random()*100));
            }
            matrix.push(help_array);
        }
        var matrix_output=[];
        for (let i=0; i<matrix.length;i++){
            matrix_output[i]=matrix[i].join('      ');
        }
        alert(matrix_output.join('\n'));
        var max_elemnent=matrix[0][0];
        var min_element=matrix[0][0];
        column_max_element=0;
        column_min_element=0;
        for (let i=0;i<matrix.length;i++){
            for (let j=0;j<matrix[i].length;j++){
                if (matrix[i][j]>max_elemnent){
                    max_elemnent=matrix[i][j];
                    column_max_element=j;
                }else if(matrix[i][j]<min_element){
                    min_element=matrix[i][j];
                    column_min_element=j;
                }
            }
        }
        for (let i=0;i<matrix.length;i++){
            let help_var=matrix[i][column_max_element];
            matrix[i][column_max_element]=matrix[i][column_min_element];
            matrix[i][column_min_element]=help_var;
        }
        for (let i=0; i<matrix.length;i++){
            matrix_output[i]=matrix[i].join('      ');
        }
        alert(matrix_output.join('\n'));
    } else{
        alert('Количество строк и столбцов должны быть больше 0 и меньше или равны 10');
    }
}
