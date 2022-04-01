package com.helloz.lemonaid.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.helloz.lemonaid.db.entity.Disease;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class RelatedDiseaseInfo {
    private long no;
    private String name;

    public static RelatedDiseaseInfo of(Disease disease) {
        RelatedDiseaseInfo res = new RelatedDiseaseInfo();
        res.setNo(disease.getNo());
        int index = disease.getName().indexOf('(');
        if (index != -1)
            res.setName(disease.getName().substring(0, disease.getName().indexOf('(')));
        else res.setName(disease.getName());

        return res;
    }
}