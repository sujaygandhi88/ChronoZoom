﻿namespace Application.Helper.Entities
{
    public class ContentItem : Chronozoom.Entities.ContentItem
    {
        public override string ToString()
        {
            return string.Format("[ContentItem: Title = {0}, Caption = {1}, MediaSource = {2}, MediaType = {3}]", Title, Caption, MediaSource, MediaType);
        }
    }
}